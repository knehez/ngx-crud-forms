import { FormField, Permissions } from 'ngx-crud-forms';
import { VideoChapter } from './video-chapter';

interface FileInfo {
    id: string;
    name: string;
}

@Permissions({
    create: [ 'admin', 'manager' ],
    read: '*',
    update: [ 'admin', 'manager' ],
    delete: [ 'admin', 'manager' ]
})
export default class User {
    @FormField({
        className: 'TextboxInput',
        header: 'Id',
        required: true,
        type: 'number',
        order: 1,
        hidden: true
    })
    id: number;

    @FormField({
        className: 'TextboxInput',
        header: 'First name',
        required: true,
        order: 2
    })
    firstName: string;

    @FormField({
        className: 'TextboxInput',
        header: 'Last name',
        required: true,
        order: 3
    })
    lastName: string;

    @FormField({
        className: 'TextboxInput',
        header: 'Email',
        type: 'email',
        order: 4
    })
    email: string;

    @FormField({
        className: 'TextboxInput',
        header: 'Password',
        type: 'password',
        required: false,
        order: 5
    })
    password: string;

    @FormField({
        className: 'RadioInput',
        header: 'Gender',
        options: [
            { key: 'Male', value: 'Male' },
            { key: 'Female', value: 'Female' }
        ],
        value: 'Male',
        order: 6
    })
    gender: string;

    @FormField({
        className: 'TextboxInput',
        header: 'JSON',
        type: 'string',
        format: 'json',
        required: false,
        order: 7
    })
    json: string;

    @FormField({
        className: 'FileInput',
        header: 'File',
        required: false,
        type: 'file',
        order: 8
    })
    file: FileInfo;

   @FormField({
        className: 'MultipleFileInput',
        header: 'Videos',
        required: false,
        type: 'file',
        order: 9
    })
    videos: FileInfo[];

    @FormField({
        className: 'TextboxInput',
        header: 'Secret field',
        type: 'string',
        required: false,
        hideOnCreate: true,
        order: 10
    })
    secretField: string;

    @FormField({
        className: 'VideoChapterInput',
        header: 'Video chapters',
        linkedObject: 'videoChapters',
        linkedData: { key: 'id', value: 'timestamp' },
        multipleSelect: true,
        required: false,
        order: 11
    })
    videoChapters: VideoChapter[];
}
