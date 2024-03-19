const getTrimText = (text) => text.trim();
const isNotEmpty = (text) => text !== "";

function getCleanNoteContent(note) {
    // Remove extra white spaces from the content
    const cleanNoteContent = {
        title: getTrimText(note.title),
        content: getTrimText(note.content),
    };
    return cleanNoteContent;
}

export { isNotEmpty, getCleanNoteContent };
