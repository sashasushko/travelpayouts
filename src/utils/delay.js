function delay(response) {
    const delay = 3000;
    return new Promise(resolve => setTimeout(() => resolve(response), delay));
}

export { delay };