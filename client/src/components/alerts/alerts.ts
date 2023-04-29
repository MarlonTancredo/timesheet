import Swal from "sweetalert2";

export const succesAlert = () => {
  Swal.fire({
    title: "Login success!",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const fillFields = () => {
  Swal.fire({
    title: "You must to fill all fields!",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const equalPasswords = () => {
  Swal.fire({
    title: "Passwords must to be equal!",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const equalEmail = () => {
  Swal.fire({
    title: "Emails must to be equal!",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const emailExistent = () => {
  Swal.fire({
    title: "This e-mail already exists, please enter a different one!",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const signupSuccess = () => {
  Swal.fire({
    title: "Sign up success!",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const wrongLogin = () => {
  Swal.fire({
    title: "Wrong Login",
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const noDataBase = () => {
  Swal.fire({
    title: "No data base connection!",
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};
