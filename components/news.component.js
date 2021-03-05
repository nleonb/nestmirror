const NUMBER_NOTICE_TO_SHOW = 3;
export const newP = (date, title, index) => {
    return (`
        <p class="notice-p" id="notice-p-${index}">
            <span class="notice-date" id="notice-date-${index}">${date}:</span>
            <span class="notice-title" id="notice-title-${index}">${title}</span>
        </p>
    `)
}

export const getNewsDiv = (data) => {
    let newHTML = '';
    for (let i = 0;  i < NUMBER_NOTICE_TO_SHOW; i++) {
        const date = new Date(data[i].published_at);
        const options = {month: 'long', day: 'numeric'};
        const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);
        newHTML +=newP(dateFormat,data[i].title, i)
    }
    return newHTML;
}