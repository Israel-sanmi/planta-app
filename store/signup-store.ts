// import { create } from "zustand";

// interface signUptypes {
//     name: string,
//     email: string,
//     password: string,
//     error: any,
//     handleSignUp: () => Promise<void>
// }

// const useSignUpStore = create<signUptypes>((set, get) => ({
//   name: "",
//   email: "",
//   password: "",
//   error: "",
//   setName: (name:string) => set({ name }),
//   setEmail: (email:string) => set({ email }),
//   setPassword: (password:string) => set({ password }),
//   setError: (error:any) => set({ error }),

//   handleSignUp: async () => {
//     const { name, email, password } = get();
//     try {
//       const userCredential = await firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, password);
//       const user = userCredential.user;
//       await user.updateProfile({
//         displayName: name,
//       });
//       console.log("User account created & signed in!");
//     } catch (error) {
//       console.log(error)
//     }
//   },
// }));

// export default useSignUpStore;
