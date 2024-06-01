export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: useCookie("auth_token").value,
      isLoggedIn: false,
      user: null as User | null,
    };
  },

  persist: true,

  actions: {
    updateToken(data: User) {
      this.token = data.token;
      useCookie("auth_token").value = data.token;
      this.updateUser(data);
    },

    updateUser(data: User) {
      this.isLoggedIn = true;
      this.user = data;
    },

    async getMe() {
      if (this.token) {
        try {
          const data: User = await $fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
              Authorization: "Bearer " + this.token,
            },
          });

          this.updateUser(data);
          return true;
        } catch (error: any) {
          this.logout();
          return false;
        }
      } else {
        this.logout();
        return false;
      }
    },

    logout() {
      this.$reset();
    },

    $reset() {
      useCookie("auth_token").value = "";
      this.token = "";
      this.isLoggedIn = false;
      this.user = null;
    },
  },
});

export interface User {
  token: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}
