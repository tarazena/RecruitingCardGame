export interface DropdownItem {
    id: string;
    description: string;
}

export interface DropdownItemSelected extends DropdownItem {
    selected: boolean;
}
