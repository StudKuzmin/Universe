class DomRefs{
    #DOMelements = {};

    addRef = (name, ref) => {
        this.#DOMelements[name] = ref;
    }

    getElement = (name) => {
        return this.#DOMelements[name];
    }
}

export const domRefs = new DomRefs();