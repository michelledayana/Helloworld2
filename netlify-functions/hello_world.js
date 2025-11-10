// netlify-functions/hello_world.js

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: `
            <h1 style="font-size: 2em;">Hello World from Cloud!</h1>
            <p>Deployed successfully 🚀</p>
        `
    };
};
