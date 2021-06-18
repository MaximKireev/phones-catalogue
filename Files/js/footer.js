export class Footer {
    constructor(element, props) {
        this.element = element;
        this.props = props;
        this.render();
    }

    render() {
        this.element.innerHTML = `<footer class = 'footer'>Footer
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum laudantium, omnis iure amet sed corporis, maxime similique assumenda aperiam deserunt voluptate cumque officia! Aperiam suscipit laborum ipsum sunt, nemo qui?</footer>`
    }
}

