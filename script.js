async function query(data) {
    const response = await fetch(
        "https://cloud.flowiseai.com/api/v1/prediction/3563ab8d-18b5-4875-bf56-6ee0992a5d1b",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});
