function fillUTMParametersFromUrl(): void {
  const currentUrl = window.location.href;
  const parsedUrl = new URL(currentUrl);
  const params = parsedUrl.searchParams;

  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  utmKeys.forEach((key) => {
    let value = params.get(key);
    if (value) {
      // Si une valeur UTM est présente dans l'URL, l'enregistrer dans localStorage
      localStorage.setItem(key, value);
    } else {
      // Sinon, récupérer la valeur UTM précédente de localStorage, si elle existe
      value = localStorage.getItem(key) || '';
    }
    const inputElement = document.querySelector(`input[name="${key}"]`) as HTMLInputElement;
    if (inputElement && value) {
      inputElement.value = value;
    }
  });

  const urlFormInputElement = document.querySelector('input[name="url_form"]') as HTMLInputElement;
  if (urlFormInputElement) {
    urlFormInputElement.value = currentUrl;
  }
}

export { fillUTMParametersFromUrl };
