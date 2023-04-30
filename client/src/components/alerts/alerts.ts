import Swal from "sweetalert2";

export const succesAlert = (message: string) => {
  Swal.fire({
    title: message,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const fillFields = (message: string) => {
  Swal.fire({
    title: message,
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const equalPasswords = (message: string) => {
  Swal.fire({
    title: message,
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const equalEmail = (message: string) => {
  Swal.fire({
    title: message,
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const emailExistent = (message: string) => {
  Swal.fire({
    title: message,
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const signupSuccess = (message: string) => {
  Swal.fire({
    title: message,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const wrongLogin = (message: string) => {
  Swal.fire({
    title: message,
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const noDataBase = (message: string) => {
  Swal.fire({
    title: message,
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};
