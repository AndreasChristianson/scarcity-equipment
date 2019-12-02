exports.hello = async (event, context) => ({
    statusCode: 200,
    body: JSON.stringify({
        message: 'hello',
        event,
        context,
        env: process.env
    })
});
