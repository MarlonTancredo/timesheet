import Swal from "sweetalert2";

export const succesAlert = (message: string) => {
  Swal.fire({
    title: message,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const warningAlert = (message: string) => {
  Swal.fire({
    title: message,
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};

export const errorAlert = (message: string) => {
  Swal.fire({
    title: message,
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "confirm",
  });
};
