import {Link, Navigate, Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {BlogPage} from "./pages/BlogPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Layout} from "./components/Layout";
import {PostPage} from "./pages/PostPage";
import {CreatePost} from "./pages/CreatePost";
import {EditPost} from "./pages/EditPost";
import {LoginPage} from "./pages/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthPovider";


export const App = () => {
    return (
        <AuthProvider>
            <Routes>
                {/* этот Route отрисует внутри Loyout в Outlet все вот это содержимое */}
                <Route path='/' element={<Layout/>}>
                    {/* index вместо path='/' */}
                    <Route index element={<HomePage/>}/>

                    <Route path='/login' element={<LoginPage/>}/>

                    <Route path='about' element={<AboutPage/>}>
                        <Route path='contacts' element={<p>Our contacts</p>}/>
                        <Route path='team' element={<p>Our team</p>}/>
                    </Route>
                    {/* автоматический переход без сохранения в истории */}
                    <Route path='about-us' element={<Navigate to='/about' replace/>}/>

                    <Route path='posts' element={<BlogPage/>}/>
                    <Route path='posts/:id' element={<PostPage/>}/>
                    <Route path='posts/:id/edit' element={<EditPost/>}/>
                    {/* закрываем приватный роут с помощью hoc */}
                    <Route path='posts/new' element={
                        <RequireAuth>
                            <CreatePost/>
                        </RequireAuth>
                    }/>

                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}