import Swal from 'sweetalert2'
import { animateTextInSweetAlert2 } from './animations';
import { generate } from "../utilities/functions";
// import withReactContent from 'sweetalert2-react-content'

export const showFirstPopup = () => {
    Swal.fire({
      title: 'First Popup',
      text: '.',
      customClass: 'upload_popup',
      showCancelButton: true,
      confirmButtonText: 'Next',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        // Call the animation function immediately after the dialog is opened
        animateTextInSweetAlert2();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        var element = document.querySelector('#clothes');
        if (element) {
          var container = document.querySelector('.contenaire3page');
          container.scrollTop = element.offsetTop;
        }
        showSecondPopup();
      }
    });
  };
  
export const showSecondPopup = (prompt,userImage,updateLoadingState,updateImageState) => {
    Swal.fire({
      title: 'Second Popup',
      text: 'This is the second popup.',
      target: '#clothes',
      customClass: {
        popup: 'clothes_popup',
      },
      // position: 'bottom-right',
      showCancelButton: true,
      confirmButtonText: 'Next',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        var element = document.querySelector('#about');
        if (element) {
          var container = document.querySelector('.contenaire3page');
          container.scrollTop = element.offsetTop;
        }
        showThirdPopup();
      }
  });
}
export const showThirdPopup = () => {
  Swal.fire({
    
    title: 'Second Popup',
    text: 'This is the second popup.',
    target: '#clothes',
    customClass: 'about_popup',
    position: 'bottom-right',
    showCancelButton: true,
    confirmButtonText: 'Next',
    cancelButtonText: 'Cancel',
    allowOutsideClick: false,
    allowEscapeKey: false,
    
  }).then((result) => {
    if (result.isConfirmed) {
      var element = document.querySelector('#upload');
      if (element) {
        var container = document.querySelector('.contenaire3page');
        container.scrollTop = element.offsetTop;
      }
      showForthPopup();
    }
  });
}
export const showForthPopup = () => {
  Swal.fire({
    
      title: 'Third Popup',
      text: 'This is the Third popup.',
      customClass: 'upload_popup2',
      icon: 'info',
      confirmButtonText: 'Close',
      allowOutsideClick: false,
      allowEscapeKey: false,
    
  });
}


export const showImagePopup = (prompt, userImageProp) => {
  Swal.fire({
    title: 'Popup with Loading Animation',
    html: '<div id="loading-animation">Loading...</div>',
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    didOpen: () => {
      Swal.showLoading(); // Show the default loading spinner
      generate(prompt, userImageProp)
        .then((imageData) => {
          const img = new Image();
          img.src = "data:image/png;base64,"+imageData.data.processed_image;
          img.onload = () => {
            Swal.getHtmlContainer().querySelector('#loading-animation').replaceWith(img); // Replace loading animation with the image
            Swal.hideLoading(); // Hide the loading spinner
          };
          img.onerror = () => {
            Swal.getHtmlContainer().querySelector('#loading-animation').textContent = 'Failed to load image'; // Display error message if image loading fails
            Swal.hideLoading(); // Hide the loading spinner
          };
        })
        .catch((error) => {
          Swal.getHtmlContainer().querySelector('#loading-animation').textContent = 'Failed to load image'; // Display error message if image loading fails
          Swal.hideLoading(); // Hide the loading spinner
        });
    }
  });
}