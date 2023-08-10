/**
 * Load the API and make an API call.  Display the results on the screen.
 */
function ContentAPIHandler() {
    // AKfycbxx5lEoAGSUQCo_557M2NTwDCilkTrBEeW-GaM_T-eX3y2p4zP8HZ_vIV3do1cPq_Eb
    const scriptId = 'AKfycbxx5lEoAGSUQCo_557M2NTwDCilkTrBEeW-GaM_T-eX3y2p4zP8HZ_vIV3do1cPq_Eb';

    // Call the Apps Script API run method
    //   'scriptId' is the URL parameter that states what script to run
    //   'resource' describes the run request body (with the function name
    //              to execute)
    try {
        gapi.client.script.scripts.run({
            'scriptId': scriptId,
            'resource': {
                'function': 'testapi',
            },
        }).then(function (resp) {
            const result = resp.result;
            console.log(resp.result)
            if (result.error && result.error.status) {
                // The API encountered a problem before the script
                // started executing.
                appendPre('Error calling API:');
                appendPre(JSON.stringify(result, null, 2));
            } else if (result.error) {
                // The API executed, but the script returned an error.

                // Extract the first (and only) set of error details.
                // The values of this object are the script's 'errorMessage' and
                // 'errorType', and an array of stack trace elements.
                const error = result.error.details[0];
                appendPre('Script error message: ' + error.errorMessage);

                if (error.scriptStackTraceElements) {
                    // There may not be a stacktrace if the script didn't start
                    // executing.
                    appendPre('Script error stacktrace:');
                    for (let i = 0; i < error.scriptStackTraceElements.length; i++) {
                        const trace = error.scriptStackTraceElements[i];
                        appendPre('\t' + trace.function+':' + trace.lineNumber);
                    }
                }
            } else {
                // The structure of the result will depend upon what the Apps
                // Script function returns. Here, the function returns an Apps
                // Script Object with String keys and values, and so the result
                // is treated as a JavaScript object (folderSet).

                const folderSet = result.response.result;
                if (Object.keys(folderSet).length == 0) {
                    appendPre('No folders returned!');
                } else {
                    appendPre('Folders under your root folder:');
                    Object.keys(folderSet).forEach(function (id) {
                        appendPre('\t' + folderSet[id] + ' (' + id + ')');
                    });
                }
            }
        });
    } catch (err) {
        //document.getElementById('content').innerText = err.message;
        console.log(err.message);
        return;
    }
}

export { ContentAPIHandler }