import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

class EditMenuPage extends React.Component {
  state = {
    isLoading: true,
    menu: {},
    message: ''
  };

  componentDidMount() {
    const menuRef = this.getMenuRef();

    if (menuRef) {
      menuRef.on('value', snapshot => {
        const menu = snapshot.val();

        const menuGroupList = [];
        Object.keys(menu).forEach(key => {
          const productList = [];

          Object.keys(menu[key].products).forEach(prodKey => {
            productList.push(menu[key].products[prodKey]);
          });

          const menuGroupObj = {
            name: menu[key].name,
            isCollapsed: true,
            products: productList
          };

          menuGroupList.push(menuGroupObj);
        });

        this.setState({
          menu: menuGroupList,
          isLoading: false
        });
      });
    }
  }

  getMenuRef = () => {
    switch (this.props.cafe) {
      case CONSTANTS.BROOKLINE:
        return this.props.firebase.brooklineMenu();
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleMenu();
      default:
        this.setState({
          message:
            'Something is very wrong with the edit page. Contact Tyrel ASAP.'
        });
        return null;
    }
  };

  handleChange = e => {
    const index = e.target.name.slice(1);

    const groupList = [...this.state.menu];

    groupList[index].name = e.target.value;

    this.setState({
      menu: groupList,
      message: ''
    });
  };

  handleProductChange = e => {
    const element = e.target.name;

    const groupIndex = element.slice(element.indexOf('g') + 1);
    const elementType = element.slice(0, 1);
    const elementIndex = element.substring(1, element.indexOf('g'));

    const groupList = [...this.state.menu];
    const productList = [...groupList[groupIndex].products];

    switch (elementType) {
      case 'n':
        productList[elementIndex].name = e.target.value;
        break;
      case 'p':
        productList[elementIndex].price = e.target.value;
        break;
      case 'd':
        productList[elementIndex].description = e.target.value;
        break;
      default:
        this.setState({
          message:
            'Something is very wrong with the edit page. Contact Tyrel ASAP.'
        });
        return;
    }

    this.setState({
      menu: groupList,
      message: ''
    });
  };

  expandGroup = groupId => {
    const index = groupId.slice(1);

    const groupList = [...this.state.menu];

    groupList[index].isCollapsed = false;

    this.setState({
      menu: groupList
    });
  };

  collapseGroup = groupId => {
    const index = groupId.slice(1);

    const groupList = [...this.state.menu];

    groupList[index].isCollapsed = true;

    this.setState({
      menu: groupList
    });
  };

  moveGroupUp = index => {
    const groupList = this.state.menu;

    const clickGroup = groupList[index];
    groupList[index] = groupList[index - 1];
    groupList[index - 1] = clickGroup;

    this.setState({
      menu: groupList
    });
  };

  moveGroupDown = index => {
    const groupList = this.state.menu;

    const clickGroup = groupList[index];
    groupList[index] = groupList[index + 1];
    groupList[index + 1] = clickGroup;

    this.setState({
      menu: groupList
    });
  };

  addGroup = () => {
    this.setState(prevState => ({
      menu: [...prevState.menu, { isCollapsed: true, name: '', products: [] }]
    }));
  };

  deleteGroup = index => {
    const groupList = this.state.menu;

    groupList.splice(index, 1);

    this.setState({
      menu: groupList
    });
  };

  moveItemUp = (groupIndex, productIndex) => {
    const groupList = this.state.menu;
    const productList = groupList[groupIndex].products;

    const clickProduct = productList[productIndex];
    productList[productIndex] = productList[productIndex - 1];
    productList[productIndex - 1] = clickProduct;

    this.setState({
      menu: groupList
    });
  };

  moveItemDown = (groupIndex, productIndex) => {
    const groupList = this.state.menu;

    const productList = groupList[groupIndex].products;
    const clickProduct = productList[productIndex];
    productList[productIndex] = productList[productIndex + 1];
    productList[productIndex + 1] = clickProduct;

    this.setState({
      menu: groupList
    });
  };

  addItem = groupIndex => {
    const groupList = this.state.menu;

    groupList[groupIndex].products.push({
      name: '',
      price: '',
      description: ''
    });

    this.setState({
      menu: groupList
    });
  };

  deleteItem = (groupIndex, productIndex) => {
    const groupList = this.state.menu;

    const productList = groupList[groupIndex].products;

    productList.splice(productIndex, 1);

    this.setState({
      menu: groupList
    });
  };

  saveData = () => {
    const menuList = this.state.menu;

    const menuGroups = {};
    menuList.forEach((group, index) => {
      const key = `group${index}`;

      const products = {};
      group.products.forEach((product, prodIndex) => {
        const prodKey = `p${prodIndex}`;

        products[prodKey] = product;
      });

      menuGroups[key] = {
        name: group.name,
        products: products
      };
    });

    const menuRef = this.getMenuRef();
    menuRef
      .set(menuGroups)
      .then(() => {
        this.setState({
          message: 'Success! Go to the main website to confirm your changes.'
        });
      })
      .catch(error => {
        this.setState({ message: error.message });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.isLoading ? (
            <span>Loading...</span>
          ) : (
            <Form>
              {this.state.menu.map((val, index) => {
                const groupId = `g${index}`;
                const groupListLength = this.state.menu.length;

                return (
                  <Container className="editContainer" key={groupId}>
                    <Form.Group controlId={groupId}>
                      <Form.Label>Menu Group Name</Form.Label>
                      <Form.Control
                        name={groupId}
                        type="text"
                        placeholder="Menu Group Name"
                        value={val.name}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <div className="row">
                      {val.isCollapsed ? (
                        <Container>
                          <span
                            className="align-self-start"
                            onClick={() => this.expandGroup(groupId)}
                          >
                            <i className="fas fa-plus" />
                          </span>
                          <span className="float-right">
                            {index !== 0 && (
                              <Button
                                variant="secondary"
                                onClick={() => this.moveGroupUp(index)}
                                type="button"
                              >
                                <i className={`fas fa-arrow-up`} />
                                Move Group Up
                              </Button>
                            )}
                            {index !== groupListLength - 1 && (
                              <Button
                                variant="secondary"
                                onClick={() => this.moveGroupDown(index)}
                                type="button"
                              >
                                <i className={`fas fa-arrow-down`} />
                                Move Group Down
                              </Button>
                            )}
                            <Button
                              variant="danger"
                              onClick={() => this.deleteGroup(index)}
                              type="button"
                            >
                              Delete Group
                            </Button>
                          </span>
                        </Container>
                      ) : (
                        <React.Fragment>
                          <Container
                            onClick={() => this.collapseGroup(groupId)}
                          >
                            <i className="fas fa-minus" />
                          </Container>
                          <Container className="col-md-10">
                            {val.products.map((item, prodIndex) => {
                              const productId = `p${prodIndex}`;
                              const nameId = `n${prodIndex}${groupId}`;
                              const priceId = `p${prodIndex}${groupId}`;
                              const descriptionId = `d${prodIndex}${groupId}`;
                              const prodListLength = val.products.length;

                              return (
                                <Container
                                  key={productId}
                                  className="innerEditContainer"
                                >
                                  <Form.Group controlId={nameId}>
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Control
                                      name={nameId}
                                      type="text"
                                      placeholder="Item Name"
                                      value={item.name}
                                      onChange={this.handleProductChange}
                                    />
                                  </Form.Group>
                                  <Form.Group controlId={priceId}>
                                    <Form.Label>
                                      Item Price (leading $ not necessary)
                                    </Form.Label>
                                    <Form.Control
                                      name={priceId}
                                      type="text"
                                      placeholder="Item Price"
                                      value={item.price}
                                      onChange={this.handleProductChange}
                                    />
                                  </Form.Group>
                                  <Form.Group controlId={descriptionId}>
                                    <Form.Label>Item Description</Form.Label>
                                    <Form.Control
                                      name={descriptionId}
                                      type="text"
                                      placeholder="Item Description"
                                      value={item.description}
                                      onChange={this.handleProductChange}
                                    />
                                  </Form.Group>
                                  <div className="text-right">
                                    {prodIndex !== 0 && (
                                      <Button
                                        variant="secondary"
                                        onClick={() =>
                                          this.moveItemUp(index, prodIndex)
                                        }
                                        type="button"
                                      >
                                        <i className={`fas fa-arrow-up`} />
                                        Move Item Up
                                      </Button>
                                    )}
                                    {prodIndex !== prodListLength - 1 && (
                                      <Button
                                        variant="secondary"
                                        onClick={() =>
                                          this.moveItemDown(index, prodIndex)
                                        }
                                        type="button"
                                      >
                                        <i className={`fas fa-arrow-down`} />
                                        Move Item Down
                                      </Button>
                                    )}
                                    <Button
                                      variant="danger"
                                      onClick={() =>
                                        this.deleteItem(index, prodIndex)
                                      }
                                      type="button"
                                    >
                                      Delete Item
                                    </Button>
                                  </div>
                                </Container>
                              );
                            })}
                            <div>
                              <Button
                                variant="cta"
                                onClick={() => this.addItem(index)}
                                type="button"
                              >
                                Add New Menu Item
                              </Button>
                            </div>
                          </Container>
                        </React.Fragment>
                      )}
                    </div>
                  </Container>
                );
              })}

              <div>
                <Button variant="cta" onClick={this.addGroup} type="button">
                  Add New Menu Group
                </Button>
              </div>

              <Button variant="cta" onClick={this.saveData} type="button">
                Save Menu
              </Button>
            </Form>
          )}
          <h2>{this.state.message}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditMenuPage);
