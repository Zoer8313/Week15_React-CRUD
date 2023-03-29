export const ENDPOINT = "https://64226d5f77e7062b3e197fa7.mockapi.io/jobs";

class JobsAPI {
    //why doesn't this need a constructor?
    get = async () => {//retrieving data
        try {
            const resp = await fetch(ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {//exception
            console.log("Something went wrong fetching the jobs!", e); //see what the error was
        }
    }

    put = async (job) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${job.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(job)
            });
            return await resp.json();
        } catch(e) {
            console.log("Something went wrong updating the jobs.", e);
        }
    }
}

export const jobsAPI = new JobsAPI();
