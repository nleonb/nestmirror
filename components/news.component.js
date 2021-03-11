export const NUMBER_NOTICE_TO_SHOW = 3;
export const newP = (date, title, index) => {
    return (`
        <p class="notice-p" id="notice-p-${index}">
            <span class="notice-date" id="notice-date-${index}">${date}:</span>
            <span class="notice-title" id="notice-title-${index}">${title}</span>
        </p>
    `)
}
