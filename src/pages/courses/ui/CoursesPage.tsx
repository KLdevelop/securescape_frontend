import { Header } from '@/widgets/header';
import { Triangle } from '@/shared/ui';
import { Status, colorFromStatus, stringFromStatus } from '@/entities/course';
import './CoursesPage.scss';

const courses = [
    {
        title: 'Варим метаданные из запросов',
        status: Status.inProcess,
    },
    {
        title: 'Криптография',
        status: Status.completed,
    },
    {
        title: 'Reverse Engineering',
        status: Status.notStarted,
    },
];

export const CoursesPage = () => {
    return (
        <>
            <Header />
            <main className="coursesPage">
                {courses.map(({ title, status }) => (
                    <section
                        key={title}
                        className="coursesPage__course block"
                    >
                        <span className={`coursesPage__course__mark coursesPage__course__mark_${status}`} />
                        {title}
                        <button className="coursesPage__course__status">
                            <span className={`coursesPage__course__status__${status}`}>{stringFromStatus(status)}</span>
                            <Triangle
                                size={25}
                                color={colorFromStatus(status)}
                                strokeWidth={8}
                                className="coursesPage__course__triangle"
                            />
                        </button>
                    </section>
                ))}
            </main>
        </>
    );
};
