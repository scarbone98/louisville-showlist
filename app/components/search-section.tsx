'use client';
import { useState, useEffect, useMemo } from "react";
import { SearchBar } from "./search-bar";
import Fuse from 'fuse.js';

type Props = {
    data: any;
}

function SearchSection({ data }: Props) {
    const [events, setEvents] = useState(data);
    const [search, setSearch] = useState('');
    const groupedEvents: any = useMemo(() => {
        const groupedEvents = {} as any;
        events.forEach((result: any) => {
            const date = new Date(result.time);
            const formattedData = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            if (!groupedEvents[formattedData]) {
                groupedEvents[formattedData] = [];
            }
            groupedEvents[formattedData].push(result);
        });
        return groupedEvents;
    }, [events]);

    useEffect(() => {
        if (search) {
            const fuseOptions = {
                keys: [
                    "name",
                    "location"
                ],
                shouldSort: true
            };

            const fuse = new Fuse(events, fuseOptions);
            const results = fuse.search(search).map(({ item }: any) => ({ ...item }));
            setEvents(results);
        } else {
            setEvents(data);
        }
    }, [search, data]);


    function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <section className="flex flex-col relative">
            <SearchBar className="pb-4 sticky" onChange={onSearchChange} value={search} />
            {
                Object.keys(groupedEvents).map((date) => {
                    return (
                        <div key={date}>
                            <h1>{date}</h1>
                            {
                                groupedEvents[date].map(({ name, location }: any) => {
                                    return (
                                        <div key={name} className="flex my-2 bg-slate-300 rounded-md p-2">
                                            <span>{name} <span className="font-bold">at {location}</span></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    );
                })
            }
        </section>
    )
}

export default SearchSection;