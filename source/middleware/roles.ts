/**
 * @TODO Add Proper Docs here
 */
const PRINCIPAL_ROLES = [
    {
        role: 'PRINCIPAL',
        resource: 'SCHOOL',
        method: 'GET',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'SCHOOL',
        method: 'POST',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'SCHOOL',
        method: 'PUT',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'SCHOOL',
        method: 'DELETE',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'CLASSROOM',
        method: 'GET',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'CLASSROOM',
        method: 'POST',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'CLASSROOM',
        method: 'PUT',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'CLASSROOM',
        method: 'DELETE',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'USER',
        method: 'GET',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'USER',
        method: 'POST',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'USER',
        method: 'PUT',
        access: true
    },
    {
        role: 'PRINCIPAL',
        resource: 'USER',
        method: 'DELETE',
        access: true
    }
];

const TEACHER_ROLES = [
    {
        role: 'TEACHER',
        resource: 'SCHOOL',
        method: 'GET',
        access: false
    },
    {
        role: 'TEACHER',
        resource: 'SCHOOL',
        method: 'POST',
        access: false
    },
    {
        role: 'TEACHER',
        resource: 'SCHOOL',
        method: 'PUT',
        access: false
    },
    {
        role: 'TEACHER',
        resource: 'SCHOOL',
        method: 'DELETE',
        access: false
    },

    {
        role: 'TEACHER',
        resource: 'CLASSROOM',
        method: 'GET',
        access: true
    },
    {
        role: 'TEACHER',
        resource: 'CLASSROOM',
        method: 'POST',
        access: true
    },
    {
        role: 'TEACHER',
        resource: 'CLASSROOM',
        method: 'PUT',
        access: true
    },
    {
        role: 'TEACHER',
        resource: 'CLASSROOM',
        method: 'DELETE',
        access: true
    },
    {
        role: 'TEACHER',
        resource: 'USER',
        method: 'GET',
        access: true
    },
    {
        role: 'TEACHER',
        resource: 'USER',
        method: 'POST',
        access: true
    },
    {
        role: 'TEACHER',
        resource: 'USER',
        method: 'PUT',
        access: true
    },
    {
        role: 'TEACHER',
        resource: 'USER',
        method: 'DELETE',
        access: true
    },
];

const STUDENT_ROLES = [
    {
        role: 'STUDENT',
        resource: 'SCHOOL',
        method: 'GET',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'SCHOOL',
        method: 'POST',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'SCHOOL',
        method: 'PUT',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'SCHOOL',
        method: 'DELETE',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'CLASSROOM',
        method: 'GET',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'CLASSROOM',
        method: 'PUT',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'CLASSROOM',
        method: 'POST',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'CLASSROOM',
        method: 'DELETE',
        access: false
    },
    {
        role: 'STUDENT',
        resource: 'USER',
        method: 'GET',
        access: true
    },
    {
        role: 'STUDENT',
        resource: 'USER',
        method: 'PUT',
        access: true
    },
    {
        role: 'STUDENT',
        resource: 'USER',
        method: 'POST',
        access: true
    },
    {
        role: 'STUDENT',
        resource: 'USER',
        method: 'DELETE',
        access: true
    }
];

export default {
    PRINCIPAL_ROLES,
    TEACHER_ROLES,
    STUDENT_ROLES
};
