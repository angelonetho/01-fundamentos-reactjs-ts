import {Header} from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/angelonetho.png',
            name: 'Angelo Netho',
            role: 'Desenvolvedor'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-04-02 18:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/Mateusmachadopedroso.png',
            name: 'Pedroso',
            role: 'CEO @ Activision'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-04-02 17:00:00')
    },
];

export function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar/>
                </aside>
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>

    )
}

