type User = {
    id: string,
    name: string
}

type OptionalUser = {[K in keyof User]?: User[K]};

let user1: OptionalUser = {
    id: "WIN"
}

let user2: OptionalUser = {
    name: "Prince"
}

let user3: User = {
    id: "WIN",
    name: "Prince"
}

type isString<T> = T extends string ? string : any;

type str = isString<string>;

type num = isString<number>;

let abc: str = "Hello";
let bcd: str = "Srishti";

let onetwothree: num = 1;
let twothreefour: num = 2;


type Learner = {id:string, quizzesCompleted:number};
type Instructor = {id:string, coursesTaught:number};
type Admin = {id:string, accessLevel: "basic" | "advance"};

type MultiRoleUser = Learner & Instructor;
type AnyUser = Learner | Instructor | Admin;

function printUserInfo(user: AnyUser) {
    if ("quizzesCompleted" in user) {
        console.log(`Learner: ${user.quizzesCompleted} quizzes completed`);
    } 
    else if ("coursesTaught" in user) {
        console.log(`Instructor: ${user.coursesTaught} courses taught`);
    } 
    else {
        console.log(`Admin: Access - ${user.accessLevel}`);
    }
}

type status = "not started" | "in progress" | "completed";

type ProgressMap<Modules extends string> = {
    [K in Modules]: status;
}

type MyModules = "Module1" | "Module2" | "Module3";

type MyProgress = ProgressMap<MyModules>;

const progress: MyProgress = {
    Module1: "completed",
    Module2: "in progress",
    Module3: "not started"
}

enum PatientStatus{
    ADMITTED,
    DISCHARGED,
    UNDEROBSERVATION
}

let status: PatientStatus = PatientStatus.UNDEROBSERVATION;

function merge<T, U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}

type MergedType = ReturnType<typeof merge>;

const mergedObj = merge({name: "Srishti"}, {age: 30});
console.log(mergedObj);


type Status = "completed" | "in progress" | "not started";

type FeedbackAllowed<T extends Status> = T extends "completed" ? string : never;

type QuizFeedback = FeedbackAllowed<"not started">;
type VideoFeedback = FeedbackAllowed<"completed">;

let QFB: VideoFeedback = "Good";


type Student = {
    name: string,
    gpa: number,
    contact?: number,
    isPassed: boolean
}

let s1: Student = {
    name: "Prince",
    gpa: 9,
    contact: 2611,
    isPassed: true
}

let s2: Partial<Student> = {
    name: "Srishti",
    gpa: 10
}

let s3: Required<Student> = {
    name: "Prince",
    gpa: 9,
    contact: 2611,
    isPassed: true
}

let s4: Omit<Student, "isPassed"> = {
    name: "Prince",
    gpa: 9,
    contact: 2611,
}

let s5: Pick<Student, "name" | "gpa"> = {
    name: "prince",
    gpa: 10
}

let s6: Readonly<Student> = {
    name: "Prince",
    gpa: 9,
    contact: 2611,
    isPassed: true
}