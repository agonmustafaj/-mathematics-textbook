import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LocaleProvider } from './i18n/LocaleContext'
import { CoursePage } from './pages/CoursePage'
import { ExamplePage } from './pages/ExamplePage'
import { SectionPage } from './pages/SectionPage'

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoursePage />} />
          <Route path="/chapter/:chapterId/section/:sectionId" element={<SectionPage />} />
          <Route
            path="/chapter/:chapterId/section/:sectionId/example/:exampleId"
            element={<ExamplePage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  )
}
