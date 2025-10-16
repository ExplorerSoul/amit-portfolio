import { useState } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

export const useProjectFilter = () => {
    const [selectedTag, setSelectedTag] = useState('All');

    const allTags = ['All', ...new Set(PROJECTS.flatMap(project => project.tags))];

    const filteredProjects: Project[] = selectedTag === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.tags.includes(selectedTag));

    return {
        selectedTag,
        setSelectedTag,
        allTags,
        filteredProjects
    };
};