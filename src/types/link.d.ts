declare module "*.yaml" {
    const content: {
        links: {
            has_thumbnail: boolean;
            list: {
                name: string;
                link: string;
                description: string;
                avatar: string;
                thumbnail?: string;
                custom_position?: string;
            }[];
        }[];
    };
    export default content;
}
