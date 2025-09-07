import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: {
      uz: '',
      ru: '',
      en: ''
    },
    description: '',
    price: '',
    images: ['', '', ''],
    category: 'blanks',
    rating: 0,
    reviews: 0,
    seller: '',
    trending: false,
    inStock: true,
    stockCount: 0,
    uploadedImages: []
  });
  const [imageFiles, setImageFiles] = useState([null, null, null]);

  // Mahsulotlarni localStoragedan o'qish
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('adminProducts')) || [];
    if (storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      // Agar localStorageda mahsulotlar bo'lmasa, dastlabki mahsulotni qo'shamiz
      const initialProducts = [
        {
          id: 101,
          name: {
            uz: "Ofis blanklari A4",
            ru: "Офисные бланки А4",
            en: "Office blanks A4"
          },
          description: "Набор офисных бланков для документов формата А4",
          price: "15 000 so'm",
          images: [
            "https://picsum.photos/seed/blanks1/200/200",
            "https://picsum.photos/seed/blanks1-2/200/200",
            "https://picsum.photos/seed/blanks1-3/200/200"
          ],
          category: "blanks",
          rating: 4.5,
          reviews: 45,
          seller: "Канцелярский мир",
          trending: true,
          inStock: true,
          stockCount: 50
        }
      ];
      setProducts(initialProducts);
      localStorage.setItem('adminProducts', JSON.stringify(initialProducts));
    }
  }, []);

  // Mahsulotlarni localStorageda saqlash
  useEffect(() => {
    localStorage.setItem('adminProducts', JSON.stringify(products));
  }, [products]);

  // Yangi mahsulot qo'shish
  const handleAddProduct = () => {
    const productId = Date.now(); // Unique ID yaratish
    const productToAdd = {
      ...newProduct,
      id: productId,
      rating: parseFloat(newProduct.rating),
      reviews: parseInt(newProduct.reviews),
      stockCount: parseInt(newProduct.stockCount)
    };
    
    setProducts([...products, productToAdd]);
    setNewProduct({
      id: '',
      name: {
        uz: '',
        ru: '',
        en: ''
      },
      description: '',
      price: '',
      images: ['', '', ''],
      category: 'blanks',
      rating: 0,
      reviews: 0,
      seller: '',
      trending: false,
      inStock: true,
      stockCount: 0,
      uploadedImages: []
    });
    setImageFiles([null, null, null]);
    alert('Mahsulot muvaffaqiyatli qo\'shildi!');
  };

  // Mahsulotni tahrirlash
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsEditing(true);
    setNewProduct({
      ...product,
      rating: product.rating.toString(),
      reviews: product.reviews.toString(),
      stockCount: product.stockCount.toString()
    });
  };

  // Tahrirlangan mahsulotni saqlash
  const handleSaveEdit = () => {
    const updatedProducts = products.map(product => 
      product.id === editingProduct.id 
        ? { 
            ...newProduct, 
            id: editingProduct.id,
            rating: parseFloat(newProduct.rating),
            reviews: parseInt(newProduct.reviews),
            stockCount: parseInt(newProduct.stockCount)
          }
        : product
    );
    
    setProducts(updatedProducts);
    setIsEditing(false);
    setEditingProduct(null);
    setNewProduct({
      id: '',
      name: {
        uz: '',
        ru: '',
        en: ''
      },
      description: '',
      price: '',
      images: ['', '', ''],
      category: 'blanks',
      rating: 0,
      reviews: 0,
      seller: '',
      trending: false,
      inStock: true,
      stockCount: 0,
      uploadedImages: []
    });
    setImageFiles([null, null, null]);
    alert('Mahsulot muvaffaqiyatli yangilandi!');
  };

  // Mahsulotni o'chirish
  const handleDeleteProduct = (id) => {
    if (window.confirm('Haqiqatan ham bu mahsulotni o\'chirmoqchimisiz?')) {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      alert('Mahsulot muvaffaqiyatli o\'chirildi!');
    }
  };

  // Rasm URLlarini yangilash
  const handleImageChange = (index, value) => {
    const updatedImages = [...newProduct.images];
    updatedImages[index] = value;
    setNewProduct({ ...newProduct, images: updatedImages });
  };

  // Fayl yuklashni boshqarish
  const handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedImages = [...newProduct.images];
        updatedImages[index] = e.target.result;
        setNewProduct({ ...newProduct, images: updatedImages });
        
        const updatedFiles = [...imageFiles];
        updatedFiles[index] = file;
        setImageFiles(updatedFiles);
      };
      reader.readAsDataURL(file);
    }
  };

  // Ko'p tilli nomlarni boshqarish
  const handleNameChange = (language, value) => {
    setNewProduct({
      ...newProduct,
      name: {
        ...newProduct.name,
        [language]: value
      }
    });
  };

  return (
    <div className="admin-panel">
      <h1>Mahsulotlarni Boshqarish Paneli</h1>
      
      <div className="admin-content">
        {/* Mahsulot qo'shish/tahrirlash formi */}
        <div className="product-form">
          <h2>{isEditing ? 'Mahsulotni Tahrirlash' : 'Yangi Mahsulot Qo\'shish'}</h2>
          
          <div className="form-group">
            <label>Nomi (O'zbekcha):</label>
            <input
              type="text"
              value={newProduct.name.uz}
              onChange={(e) => handleNameChange('uz', e.target.value)}
              placeholder="Mahsulot nomi o'zbekcha"
            />
          </div>
          
          <div className="form-group">
            <label>Название (Русский):</label>
            <input
              type="text"
              value={newProduct.name.ru}
              onChange={(e) => handleNameChange('ru', e.target.value)}
              placeholder="Название товара на русском"
            />
          </div>
          
          <div className="form-group">
            <label>Name (English):</label>
            <input
              type="text"
              value={newProduct.name.en}
              onChange={(e) => handleNameChange('en', e.target.value)}
              placeholder="Product name in English"
            />
          </div>
          
          <div className="form-group">
            <label>Tavsifi:</label>
            <textarea
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              placeholder="Mahsulot tavsifi"
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label>Narxi:</label>
            <input
              type="text"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              placeholder="Masalan: 15 000 so'm"
            />
          </div>
          
          <div className="form-group">
            <label>Mahsulotlar soni:</label>
            <input
              type="number"
              min="0"
              value={newProduct.stockCount}
              onChange={(e) => setNewProduct({ ...newProduct, stockCount: e.target.value })}
              placeholder="Mahsulotlar soni"
            />
          </div>
          
          <div className="form-group">
            <label>Kategoriya:</label>
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            >
              <option value="blanks">Blanks</option>
              <option value="paper">Qog'oz mahsulotlari</option>
              <option value="writing">Yozuv qurollari</option>
              <option value="organizers">Tashkiliy buyumlar</option>
              <option value="other">Boshqa</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Reyting:</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={newProduct.rating}
              onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })}
              placeholder="0 dan 5 gacha"
            />
          </div>
          
          <div className="form-group">
            <label>Sharhlar soni:</label>
            <input
              type="number"
              min="0"
              value={newProduct.reviews}
              onChange={(e) => setNewProduct({ ...newProduct, reviews: e.target.value })}
              placeholder="Sharhlar soni"
            />
          </div>
          
          <div className="form-group">
            <label>Sotuvchi:</label>
            <input
              type="text"
              value={newProduct.seller}
              onChange={(e) => setNewProduct({ ...newProduct, seller: e.target.value })}
              placeholder="Sotuvchi nomi"
            />
          </div>
          
          <div className="form-group">
            <label>Rasmlar:</label>
            {newProduct.images.map((image, index) => (
              <div key={index} className="image-input-group">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  placeholder={`Rasm ${index + 1} URL manzili`}
                />
                <span>yoki</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(index, e)}
                  className="file-input"
                />
                {image && (
                  <div className="image-preview">
                    <img src={image} alt={`Preview ${index + 1}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={newProduct.trending}
                onChange={(e) => setNewProduct({ ...newProduct, trending: e.target.checked })}
              />
              Trenddagi mahsulot
            </label>
          </div>
          
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={newProduct.inStock}
                onChange={(e) => setNewProduct({ ...newProduct, inStock: e.target.checked })}
              />
              Omborda mavjud
            </label>
          </div>
          
          <div className="form-actions">
            {isEditing ? (
              <>
                <button className="save-btn" onClick={handleSaveEdit}>Saqlash</button>
                <button className="cancel-btn" onClick={() => {
                  setIsEditing(false);
                  setEditingProduct(null);
                  setNewProduct({
                    id: '',
                    name: {
                      uz: '',
                      ru: '',
                      en: ''
                    },
                    description: '',
                    price: '',
                    images: ['', '', ''],
                    category: 'blanks',
                    rating: 0,
                    reviews: 0,
                    seller: '',
                    trending: false,
                    inStock: true,
                    stockCount: 0,
                    uploadedImages: []
                  });
                  setImageFiles([null, null, null]);
                }}>Bekor qilish</button>
              </>
            ) : (
              <button className="add-btn" onClick={handleAddProduct}>Mahsulot Qo'shish</button>
            )}
          </div>
        </div>
        
        {/* Mahsulotlar ro'yxati */}
        <div className="products-list">
          <h2>Mahsulotlar Ro'yxati ({products.length} ta)</h2>
          
          {products.length === 0 ? (
            <p>Hozircha mahsulotlar mavjud emas</p>
          ) : (
            <div className="products-table">
              <div className="table-header">
                <div>Nomi</div>
                <div>Narxi</div>
                <div>Kategoriya</div>
                <div>Soni</div>
                <div>Holati</div>
                <div>Amallar</div>
              </div>
              
              {products.map(product => (
                <div key={product.id} className="table-row">
                  <div className="product-info">
                    <img src={product.images[0] || 'https://via.placeholder.com/50'} alt={product.name.uz} />
                    <div>
                      <div className="product-name">{product.name.uz}</div>
                      <div className="product-seller">{product.seller}</div>
                    </div>
                  </div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-category">{product.category}</div>
                  <div className="product-stock">{product.stockCount} ta</div>
                  <div className="product-status">
                    <span className={`status-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                      {product.inStock ? 'Omborda' : 'Qolmagan'}
                    </span>
                    {product.trending && <span className="trending-badge">Trend</span>}
                  </div>
                  <div className="product-actions">
                    <button 
                      className="edit-btn"
                      onClick={() => handleEditProduct(product)}
                    >
                      Tahrirlash
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;