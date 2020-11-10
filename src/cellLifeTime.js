module.exports = {
    shouldItLive: shouldItLive
}

function shouldItLive(alive, neighborCount) {

    if (alive && (neighborCount === 2 || neighborCount === 3)) {
        return true;
    }

    if (!alive && neighborCount === 3) {
        return true;
    }

    return false;
}