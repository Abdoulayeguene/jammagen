require('dotenv').config();
const GitHubPublisher = require('github-publish');
const moment = require('moment');

const { GITHUB_TOKEN, GITHUB_USER, GITHUB_REPO } = process.env

const gitpush = async(data) => {

    return new Promise((resolve) => {

        const publisher = new GitHubPublisher(GITHUB_TOKEN, GITHUB_USER, GITHUB_REPO);
        const path = "content/signature/"
        
        const { tribute, organisation, author, twitter, facebook } = data.data
        const { created_at: date } = data
        let filename = `${path}signature-${moment(date).format("YYYY-MM-DD-HH-mm")}.md`
        let filecontent = `---\ntitle: \ndate: ${date}\norganisation: ${organisation}\nauthor: ${author}\ntwitter: ${twitter}\npays: ${pays}\n---\n\n${tribute}`

        publisher.publish(filename, filecontent).then(function (result) {
            // If "result" is truthy then the post was successfully published
            resolve("Enregister")
        });

    })
}

module.exports = gitpush