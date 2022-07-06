class BrowserHistoryService {
  historyListCount() {
    return window.history.length;
  }

  historyState() {
    return window.history.state;
  }

  currentUrl() {
    return window.location.href;
  }

  currentRoute() {
    return window.location.hash.replace('/', '');
  }

  port() {
    return window.location.port;
  }

  host() {
    return window.location.host;
  }

  hostName() {
    return window.location.hostname;
  }

  origin() {
    return window.location.origin;
  }

  protocol() {
    return window.location.protocol;
  }

  search() {
    return window.location.search;
  }

  previousRoute() {
    window.history.back();
  }

  getCurrentHash() {
    return window.location.hash;
  }

  nextRoute() {
    window.history.forward();
  }

  goToRoute(target) {
    window.history.go(target);
  }

  goToUrl(target) {
    window.location.replace(`${target}${this.search()}`);
  }

  reload() {
    window.location.reload();
  }

  open(url, windowName, windowFeatures) {
    window.open(url, windowName, windowFeatures);
  }
}
export default new BrowserHistoryService();
