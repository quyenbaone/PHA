import { SidebarProvider } from '@/contexts/SideBarProvider';
import ToastProvider from '@/contexts/ToastProvider';
import routers from '@/routers/routers';
import Sidebar from '@components/Sidebar/Sidebar';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StoreProvider from './contexts/StoreProvider';

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SidebarProvider>
                    <BrowserRouter>
                        <Sidebar />
                        {/* Nếu hiện lỗi useNavigate() may be only use in the context of a router component thì tức là nó nằm ngoài router ko thể chuyển trang cần đưa vào trong router */}
                        {/* supspense là thời gian chờ loading */}
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {routers.map((item, index) => {
                                    const Component = item.component;
                                    return (
                                        <Route
                                            path={item.path}
                                            element={<Component />}
                                            key={index}
                                        />
                                    );
                                })}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </SidebarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
