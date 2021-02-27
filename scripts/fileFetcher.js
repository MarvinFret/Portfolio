class FileFetcher {
  constructor() {
    // const response = await fetch("./scripts/projects.json");
    // this.data = await respinse.json();
    // fetch("./scripts/projects.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => (this.data = data))
    //   .catch(err => console.log(err));
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
