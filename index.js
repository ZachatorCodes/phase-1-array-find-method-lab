function superbowlWin(array) {
    const value = array.find(obj => obj.result === "W");
    if (typeof value === 'object') {
        return value.year;
    }
    else {
        return undefined;
    }
}