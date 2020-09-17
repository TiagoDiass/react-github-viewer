import swal from 'sweetalert2';

const sweetAlert = swal;

export const Toast = sweetAlert.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', sweetAlert.stopTimer);
    toast.addEventListener('mouseleave', sweetAlert.resumeTimer);
  },
});

export default sweetAlert;
