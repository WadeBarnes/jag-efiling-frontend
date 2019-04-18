require('./support/enzyme.setup');
import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from '../src/App';
import Dashboard from '../src/Dashboard.js';
import Form7 from '../src/forms/Form7.js';
import Form2 from '../src/forms/Form2.js';
import Notifications from '../src/notifications.js';
import MyDocuments from '../src/forms/MyDocuments.js';

describe('App', ()=>{

    test('loads Dashboard', ()=>{
        const app = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <App fetch="false"/>
            </MemoryRouter>
        );

        expect(app.find(Dashboard)).toHaveLength(1);
    });

    test('can load Form7', ()=>{
        const app = mount(
            <MemoryRouter initialEntries={[ '/form.7.html' ]}>
                <App fetch="false"/>
            </MemoryRouter>
        );

        expect(app.find(Form7)).toHaveLength(1);
    });

    test('can load Form2', ()=>{
        const app = mount(
            <MemoryRouter initialEntries={[ '/form2' ]}>
                <App fetch="false"/>
            </MemoryRouter>
        );

        expect(app.find(Form2)).toHaveLength(1);
    });

    test('can load Notifications', ()=>{
        const app = mount(
            <MemoryRouter initialEntries={[ '/notifications.html' ]}>
                <App fetch="false"/>
            </MemoryRouter>
        );

        expect(app.find(Notifications)).toHaveLength(1);
    });

    test('can load MyDocuments', ()=>{
        const app = mount(
            <MemoryRouter initialEntries={[ '/my-documents.html' ]}>
                <App fetch="false"/>
            </MemoryRouter>
        );

        expect(app.find(MyDocuments)).toHaveLength(1);
    });
});
