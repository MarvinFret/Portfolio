class FileFetcher {
  constructor() {
  }
  async fetchFile() {
    try {
      const response = await fetch("./scripts/projects.json");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

const fetcher = new FileFetcher();
