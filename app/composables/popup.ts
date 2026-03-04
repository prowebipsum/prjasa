export const usePopup = () => {

  const route = useRoute();

  // Check localStorage for previous preference
  const storedJanganTampilkan = typeof window !== 'undefined' ? localStorage.getItem('janganTampilkanPopup') : null;
  const initialValue = storedJanganTampilkan === 'true';
  
  const janganTapilkan = ref(initialValue);
  const showPopup = ref(false);

  // Action to hide popup and save preference
  const actionHidePopup = () => {
    showPopup.value = false;
    // Save to localStorage if checkbox is checked
    if (janganTapilkan.value) {
      localStorage.setItem('janganTampilkanPopup', 'true');
    }
  };

  // Check if popup should be shown
  const checkShouldShowPopup = () => {
    if (janganTapilkan.value) {
      showPopup.value = false;
      return false;
    }
    return true;
  };

  return  {
    janganTapilkan,
    showPopup,
    actionHidePopup,
    checkShouldShowPopup
  }

}
