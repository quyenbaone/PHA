import { AuthProvider } from '@/contexts/AuthProvider';
import { SidebarProvider } from '@/contexts/SideBarProvider';
import ToastProvider from '@/contexts/ToastProvider';
import routers from '@/routers/routers';
import Sidebar from '@components/Sidebar/Sidebar';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StoreProvider from './contexts/StoreProvider';

function App() {
    return (
        <AuthProvider>
            <StoreProvider>
                <ToastProvider>
                    <SidebarProvider>
                        <BrowserRouter>
                            <Sidebar />
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
        </AuthProvider>
    );
}

export default App;
