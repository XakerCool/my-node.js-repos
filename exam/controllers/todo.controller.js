export let todoList = [];

export const create = (req, res) => {
    const date = new Date();
    const todoItem = req.body;
    if (!todoItem) {
        return res.status(500).json({ message: "Не удалось создать заметку" });
    }
    if (todoList.find(item => item.title === todoItem.title)) {
        todoItem.title += "(1)";
    }
    todoItem.creatingDate = date.toLocaleDateString();
    todoList.push(todoItem);
    return res.json({ message: `Заметка с заголовком ${todoItem.title} была успешно добавлена` });
}

export const read = (req, res) => {
    if (todoList.length === 0) {
        return res.json({ mewssgae: "Список заметок пуст" });
    }
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: `Заметки с заголовком ${title} не было найдено` });
    }
    if (title === "all") {
        return res.json({ todo_list: todoList });
    }
    const tmpList = todoList.find(item => item.title === title);
    if (!tmpList) {
        return res.status(400).json({ message: `Заметки с заголовком ${title} не было найдено` });
    }
    return res.json({ todo_list: tmpList });
}

export const update = (req, res) => {
    if (todoList.length === 0) {
        return res.json({ mewssgae: "Список заметок пуст" });
    }
    const date = new Date();
    const { title, newTitle, newDescription, newAuthor } = req.body;
    if (!title) {
        return res.status(400).json({ mewssage: "Заметки с таким заголовком не существует" });
    }
    const todoItem = todoList.find(item => item.title === title);
    todoItem.title = newTitle;
    todoItem.description = newDescription;
    todoItem.author = newAuthor;
    todoItem.creatingDate = date.toLocaleDateString();
    return res.json({ message: `Заметка с заголовком ${title} была обновлена, теперь она называется - ${newTitle}` });
}

export const del = (req, res) => {
    if (todoList.length === 0) {
        return res.json({ mewssgae: "Список заметок пуст" });
    }
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Заметки с таким заголовком не было найдено" });
    }
    const todoItem = todoList.find(item => item.title === title);
    todoList = todoList.splice(todoList.indexOf(todoItem), todoList.indexOf(todoItem));
    return res.json({ message: `Заметка под заголовком - ${todoItem.title} была успешно удалена` });
}