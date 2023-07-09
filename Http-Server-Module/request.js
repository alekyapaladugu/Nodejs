const axios = require('axios').default;

async function postData() {
    const data = {
        occupation: "Software Engineer",
        major: "CS"
    }
    try {
        const post_response = await axios.post('http://localhost:3000', data);
        console.log(post_response)
        readData()
    }
    catch {
        console.log('Error')
    }
}

postData()

async function readData() {
    try {
        const response = await axios.get('http://localhost:3000');
        console.log('Firstname is: ' + response.data.firstName + ', Lastname is: ' + response.data.lastName);
    }
    catch {
        console.log('Error')
    }
}

