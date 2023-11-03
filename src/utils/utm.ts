function fillUTMParametersFromUrl(): void {
  // Récupération de l'URL actuelle
  const currentUrl = window.location.href;
  const parsedUrl = new URL(currentUrl);
  const params = parsedUrl.searchParams;

  // Les clés UTM que nous souhaitons extraire
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  // Parcourir chaque clé UTM et remplir le champ correspondant si la valeur est présente
  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      const inputElement = document.querySelector(`input[name="${key}"]`) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = value;
      }
    }
  });

  // Ajout de la logique pour remplir l'input 'url_form' avec l'URL complète
  const urlFormInputElement = document.querySelector('input[name="url_form"]') as HTMLInputElement;
  if (urlFormInputElement) {
    urlFormInputElement.value = currentUrl;
  }
}

export { fillUTMParametersFromUrl };
