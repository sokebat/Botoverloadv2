export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.includes("@")) {
          resolve({ success: true });
        } else {
          reject(new Error("Invalid email address"));
        }
      }, 1000);
    });
  };
  