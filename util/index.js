module.exports.respond = (error, data, request, response) => {
    if(error) {
        response.status(200).json({ 'success': false });
        console.log('[!SERVER] '+error);
        console.log('[REQUEST BODY] '+JSON.stringify(request.body));
    } else response.status(200).json(data);
};
