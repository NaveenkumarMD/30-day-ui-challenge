const jobPostingsUrl = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const jobdetailsURL = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
var COUNT = 10;

async function fetchURL() {
  try {
    const response = await fetch(jobPostingsUrl, {
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Couldn't fetc jobss");
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchJobData(id) {
  try {
    const response = await fetch(jobdetailsURL(id), {
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Couldn't fetch job");
    }
  } catch (error) {
    console.log(error);
    return {};
  }
}
async function getDetails(jobIds, start, end) {
  const result = new Array();
  for (let i = start; i < end; i++) {
    const jobDetails = await fetchJobData(jobIds[i]);
    showDetail(jobDetails);
  }
  return result;
}

function showDetail(job) {
  const containerDOM = document.querySelector(".board");
  const cardDOM = document.createElement("div");
  cardDOM.innerHTML = job.title;
  containerDOM.appendChild(cardDOM);
}

async function main() {
  try {
    const jobIds = await fetchURL();
    await getDetails(jobIds, 0, COUNT);
  } catch (error) {
    console.log(error);
  }
}

document
  .getElementById("loadMoreButton")
  .addEventListener("click", async () => {
    const jobIds = await fetchURL();
    getDetails(jobIds, COUNT, COUNT + 20);
    COUNT = COUNT + 20;
  });
main();
