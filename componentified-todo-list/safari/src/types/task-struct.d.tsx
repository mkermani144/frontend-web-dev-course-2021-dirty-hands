// @ts-ignore
interface TaskStruct {
    id: number;
    subject: string;
    isDone: boolean;
}

interface TodoModel {
    id: string;
    ownerId: number;
    title: string;
    checked: boolean;
}

interface TodoUpdateModel {
    title: string;
    checked: boolean;
}
