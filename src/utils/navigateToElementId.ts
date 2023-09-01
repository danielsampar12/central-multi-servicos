export function navigateToElementId(id: string) {
  if (window.location.hash === id) {
    window.location.hash = '/';

    window.location.hash = id;
  } else {
    window.location.hash = id;
  }
}
