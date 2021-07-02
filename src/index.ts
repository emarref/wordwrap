export const wordWrap = (inputString: string, lineLength: number): string => {
    const trimmedString = inputString.trim();

    if (trimmedString.length <= lineLength) {
        return trimmedString;
    }

    // Split at the last space in the first substring no longer than the allowed line length
    let splitAt = trimmedString.substr(0, lineLength + 1).lastIndexOf(' ');

    if (-1 === splitAt) {
        // If there is no space, hard-break in the middle of the word
        splitAt = lineLength;
    }

    // Split the word at the calculated position
    const left = trimmedString.substr(0, splitAt).trim();
    const right = trimmedString.substr(splitAt).trim();

    // Concatenate the correct length string with the rest of the string after wrapping it
    return `${left}\n${wordWrap(right, lineLength)}`;
};