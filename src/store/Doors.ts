import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import {type DoorsInformation, type IDoor, UnsetDoors, ValidDoors} from "@/models/Doors";


const doors: Writable<DoorsInformation> = writable(new UnsetDoors());

const setDoors = (allDoors: Array<IDoor>) => doors.set(new ValidDoors(allDoors));

export {doors, setDoors};
